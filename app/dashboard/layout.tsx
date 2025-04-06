import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen ">
      <Sidebar />
      <div className="container mx-auto pl-14">
        <Header />
        <main className="container mx-auto p-8">{children}</main>
      </div>
    </div>
  );
}