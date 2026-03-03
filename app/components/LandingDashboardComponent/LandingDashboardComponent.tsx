import { fetchAPIData } from "@/app/service/dashboardServices";
import styles from "./LandingDashboardComponent.module.css";
import ApiDatatableComponent from "./ApiDatatableComponent";

const LandingDashboardComponent = async () => {
  const data = await fetchAPIData();

  console.log("data", data);

  return (
    <div className={styles.mainContainer}>
      <ApiDatatableComponent tableData={data.data} />
    </div>
  )
}

export default LandingDashboardComponent;