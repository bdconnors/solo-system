import { Dashboard, DashboardContent, DashboardUser} from '@solo-system/dashboard';
import { DASHBOARD_CONFIG } from "@/app.config";
import { useAccount } from "@solo-system/firebase-client";
import { useRouter } from 'next/router';
import { DashboardLayout } from '@/components/dashboard-layout/DashboardLayout';


const Home = ()=> {
  return (
    <DashboardLayout 

    >
      <DashboardContent 
        title ={'Home'} 
        subtitle='Welcome to the Solo Content Management System!'
      >
        <DashboardContent.Wrapper>
        </DashboardContent.Wrapper>
      </DashboardContent>
    </DashboardLayout>
  );
}
export default Home;