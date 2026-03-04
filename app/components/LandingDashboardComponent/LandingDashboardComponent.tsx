import { fetchAPIData } from "@/app/service/dashboardServices";
import styles from "./LandingDashboardComponent.module.css";
import ApiDatatableComponent from "./ApiDatatableComponent/ApiDatatableComponent";
import LandingPageHeader from "./LandingPageHeader/LandingPageHeader";

const LandingDashboardComponent = async () => {
  const data = await fetchAPIData();

  console.log("data", data);

  return (
    <div className={styles.mainContainer}>
      <LandingPageHeader />
      <ApiDatatableComponent tableData={data.data} />
    </div>
  )
}

export default LandingDashboardComponent;