import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-white">
      <div className="text-center px-4 py-16">
        <h1 className="text-6xl font-bold text-brand-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-black mb-6">Page Not Found</h2>
        <p className="text-neutral-gray mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="inline-block bg-brand-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-brand-primary-dark transition-colors">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
