import react  from "react";
import styles from "../../Styles/Statistics.module.css";
import { With_auth_redirrect } from "../AsyncAcion/hoc/Auth_redirect";

const Statistics = ()=> {
    return (
        <div className={styles.statistics_container}>
            <h2>Statistics</h2>
                <div className="contetnt">
        
                </div>
            </div>
    )
}
export const Statistics_with_redirrect = With_auth_redirrect(Statistics);
