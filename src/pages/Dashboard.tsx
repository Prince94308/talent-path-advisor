
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Dashboard as DashboardContent } from "@/components/dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <DashboardShell>
      <DashboardContent />
    </DashboardShell>
  );
};

export default DashboardPage;
