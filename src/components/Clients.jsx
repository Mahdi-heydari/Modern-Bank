import styles from "../Style/style";
import { clients } from "../constants";

export default function Clients() {
  return (
    <section className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} flex-wrap w-full `}>
        {clients.map(client=> (
          <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] `}>
            <img src={client.logo} alt="logo_client" className="sm:w-[182px] duration-200 w-[100px] object-contain"/>
          </div>
        ))}
      </div>
    </section>
  )
}
