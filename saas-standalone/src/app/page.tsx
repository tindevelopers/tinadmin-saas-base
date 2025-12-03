import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to the SaaS template dashboard
  redirect('/templates/saas/dashboard');
}