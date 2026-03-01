import { fetchAPIData } from "@/app/service/dashboardServices";

const LandingDashboardComponent = async () => {
  const data = await fetchAPIData();

  console.log("data", data);

  return (
    <div>
      Landing Dashboard
    </div>
  )
}

export default LandingDashboardComponent;