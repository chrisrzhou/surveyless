export default function NotFoundPage() {
  if (typeof window !== 'undefined') {
    window.location = '/';
  }
  return null;
}
