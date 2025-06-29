"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

const statusOptions = [
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];

function downloadImage(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function ConfirmModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onCancel}
      ></div>
      <div className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Confirm Deletion
        </h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this registration? This action cannot
          be undone.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [selected, setSelected] = useState(null);
  const [updatingStatusId, setUpdatingStatusId] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  // Check authentication on component mount
  useEffect(() => {
    const checkAuth = () => {
      // Check if user is remembered
      const remembered = localStorage.getItem("adminAuthenticated") === "true";
      if (remembered) {
        setIsAuthenticated(true);
        setRememberMe(true);
      }
    };

    checkAuth();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        const { success } = await response.json();
        if (success) {
          // Store authentication based on remember me preference
          if (rememberMe) {
            localStorage.setItem("adminAuthenticated", "true");
          } else {
            sessionStorage.setItem("adminAuthenticated", "true");
          }
          setIsAuthenticated(true);
        } else {
          setError("Invalid password");
        }
      } else {
        setError("Authentication failed");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    // Clear both storage types
    localStorage.removeItem("adminAuthenticated");
    sessionStorage.removeItem("adminAuthenticated");
    setIsAuthenticated(false);
    setPassword("");
    setError("");
    setRememberMe(false);
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchRegistrations = async () => {
      try {
        const response = await fetch("/api/admin/registrations");
        if (!response.ok) {
          throw new Error("Failed to fetch registrations");
        }
        const data = await response.json();
        setRegistrations(data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRegistrations();
  }, [isAuthenticated]);

  // Filtering and searching
  const filtered = registrations.filter((reg) => {
    const matchesStatus = status === "all" || reg.status === status;
    const searchLower = search.toLowerCase();
    const matchesSearch =
      reg.teamName.toLowerCase().includes(searchLower) ||
      reg.universityName.toLowerCase().includes(searchLower) ||
      (Array.isArray(reg.members) &&
        reg.members.some((m) => m.name.toLowerCase().includes(searchLower)));
    return matchesStatus && matchesSearch;
  });

  // Handle status change
  const handleStatusChange = async (id, newStatus) => {
    setUpdatingStatusId(id);
    try {
      const res = await fetch(`/api/admin/registrations/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      setRegistrations((prev) =>
        prev.map((reg) =>
          reg._id === id ? { ...reg, status: newStatus } : reg
        )
      );
    } catch (e) {
      alert("Status failed to Update");
    } finally {
      setUpdatingStatusId(null);
    }
  };

  // Add delete handler
  const handleDelete = (id) => {
    setConfirmDeleteId(id);
  };

  const confirmDelete = async () => {
    if (!confirmDeleteId) return;
    try {
      const res = await fetch(`/api/admin/registrations/${confirmDeleteId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete registration");
      setRegistrations((prev) =>
        prev.filter((reg) => reg._id !== confirmDeleteId)
      );
    } catch (e) {
      alert("Failed to delete registration");
    } finally {
      setConfirmDeleteId(null);
    }
  };

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show simple password form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Admin Access
              </h1>
              <p className="text-gray-600">
                Enter the admin password to access the dashboard
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors"
                    placeholder="Enter admin password"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || !password}
                className="w-full bg-brand-primary text-neutral-white py-3 px-4 rounded-lg font-medium hover:bg-brand-light focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-neutral-white mr-2"></div>
                    Authenticating...
                  </div>
                ) : (
                  "Access Dashboard"
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                This area is restricted to authorized personnel only.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show loading while fetching registrations
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading registrations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="w-full bg-white shadow px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-200">
        <div>
          <h1 className="text-3xl font-extrabold text-primary tracking-tight">
            Team Registrations
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Manage and review all team registrations for the event.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-stretch md:items-center">
          <input
            type="text"
            placeholder="Search by team, university, or member..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50 min-w-[220px]"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50"
          >
            <option value="all">All</option>
            {statusOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto py-8 px-2 md:px-8">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center py-8 text-gray-500">
              No registrations found.
            </div>
          ) : (
            filtered.map((registration) => (
              <div
                key={registration._id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2 mb-2">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-xl font-bold text-primary">
                      {registration.teamName}
                    </h2>
                    <div className="flex gap-2">
                      <button
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-brand-primary text-white text-xs font-semibold hover:bg-brand-light transition border border-brand-primary shadow"
                        onClick={() => setSelected(registration)}
                        title="View Details"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0A9 9 0 11 3 12a9 9 0 0118 0z"
                          />
                        </svg>
                        Info
                      </button>
                      <button
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-red-500 text-white text-xs font-semibold hover:bg-red-600 transition border border-red-500 shadow"
                        onClick={() => handleDelete(registration._id)}
                        title="Delete Registration"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="text-gray-700 text-sm">
                      <span className="font-semibold">University:</span>{" "}
                      {registration.universityName}
                    </div>
                    <div className="text-gray-700 text-sm">
                      <span className="font-semibold">Category:</span>{" "}
                      {registration.category}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="text-gray-700 text-sm">
                      <span className="font-semibold">Email:</span>{" "}
                      {registration.email}
                    </div>
                    <div className="text-gray-700 text-sm">
                      <span className="font-semibold">Contact:</span>{" "}
                      {registration.contact}
                      {registration.contact2 && (
                        <span className="text-xs text-gray-400">
                          ({registration.contact2})
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        statusColors[registration.status] ||
                        "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {registration.status.charAt(0).toUpperCase() +
                        registration.status.slice(1)}
                    </span>
                    <select
                      className="rounded-lg border px-2 py-1 text-xs font-semibold ml-2"
                      value={registration.status}
                      disabled={updatingStatusId === registration._id}
                      onChange={(e) =>
                        handleStatusChange(registration._id, e.target.value)
                      }
                    >
                      {statusOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <span className="text-xs text-gray-500 ml-auto">
                      {new Date(registration.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">
                    Team Members
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {Array.isArray(registration.members) &&
                      registration.members.map((member, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 hover:shadow-lg transition group"
                        >
                          <div
                            style={{
                              position: "relative",
                              width: 40,
                              height: 40,
                              flexShrink: 0,
                            }}
                          >
                            {member.photo && (
                              <Image
                                src={member.photo}
                                alt={member.name}
                                fill
                                className="object-cover rounded-full border-2 border-white shadow cursor-pointer group-hover:ring-2 group-hover:ring-primary"
                                title="Click to view photo"
                                onClick={() =>
                                  window.open(member.photo, "_blank")
                                }
                              />
                            )}
                          </div>
                          <button
                            className="ml-1 p-1 rounded-full bg-brand-primary hover:bg-brand-light text-white shadow transition"
                            title="Download Photo"
                            onClick={(e) => {
                              e.stopPropagation();
                              downloadImage(
                                member.photo,
                                `${member.name.replace(/\s+/g, "_")}_photo.jpg`
                              );
                            }}
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12"
                              />
                            </svg>
                          </button>
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">
                              {member.name}
                            </div>
                            <div className="text-xs text-gray-600">
                              Dept: {member.dept} | ID: {member.id}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      {/* Modal for registration details */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              onClick={() => setSelected(null)}
              title="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-primary mb-2">
              {selected.teamName}
            </h2>
            <div className="mb-2 text-gray-600 text-sm flex flex-wrap gap-4">
              <span>
                <b>University:</b> {selected.universityName}
              </span>
              <span>
                <b>Category:</b> {selected.category}
              </span>
              <span>
                <b>Status:</b>{" "}
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    statusColors[selected.status] || "bg-gray-200 text-gray-700"
                  }`}
                >
                  {selected.status.charAt(0).toUpperCase() +
                    selected.status.slice(1)}
                </span>
              </span>
              <span>
                <b>Registered:</b>{" "}
                {new Date(selected.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 mb-1">Project Idea</h3>
              <div className="text-gray-700 mb-1">
                <b>Short Brief:</b> {selected.idea?.slice(0, 150)}
                {selected.idea?.length > 150 ? "..." : ""}
              </div>
              <div className="text-gray-600 text-sm whitespace-pre-line">
                {selected.idea}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Team Members</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.isArray(selected.members) &&
                  selected.members.map((member, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-gray-50 rounded-lg p-3 hover:shadow-lg transition group"
                    >
                      <div
                        style={{
                          position: "relative",
                          width: 56,
                          height: 56,
                          flexShrink: 0,
                        }}
                      >
                        {member.photo && (
                          <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            className="object-cover rounded-full border-2 border-white shadow cursor-pointer group-hover:ring-2 group-hover:ring-primary"
                            title="Click to view photo"
                            onClick={() => window.open(member.photo, "_blank")}
                          />
                        )}
                      </div>
                      <button
                        className="ml-2 p-2 rounded-full bg-brand-primary hover:bg-brand-light text-white shadow transition"
                        title="Download Photo"
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadImage(
                            member.photo,
                            `${member.name.replace(/\s+/g, "_")}_photo.jpg`
                          );
                        }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12"
                          />
                        </svg>
                      </button>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {member.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          Dept: {member.dept}
                        </div>
                        <div className="text-sm text-gray-600">
                          ID: {member.id}
                        </div>
                        {member.email && (
                          <div className="text-sm text-gray-500">
                            Email: {member.email}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <ConfirmModal
        isOpen={!!confirmDeleteId}
        onConfirm={confirmDelete}
        onCancel={() => setConfirmDeleteId(null)}
      />
    </div>
  );
}
