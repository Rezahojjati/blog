import React from "react";
import styles from "../../../styles/Home.module.css";
import axios from "axios";

export default function SubscribeBar() {
  // const [email, setEmail] = useState<string | null>(null);

  // const handleSunscribe = () => {
  //   if (email !== null) {
  //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
  //       axios
  //         .post(
  //           "https://workflowapi.onetechnology.com/api/workflowexecsync/7a2399e3-dbfa-4fe6-8297-2516bb9a7974",
  //           [
  //             {
  //               Name: "email",
  //               Value: email,
  //             },
  //           ]
  //         )
  //         .then((response) => {
  //           console.log(response);
  //         });
  //     }
  //   }
  // };

  return (
    <div style={{ marginTop: "15px" }}>
      <p className={styles.searchTitle}>SUBSCRIBE</p>
      {/* <div className={styles.searchDiv}>
        <input
          placeholder="me@email.com"
          className="form-control"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button
          className="btn btn-warning"
          style={{
            backgroundColor: "#33e1ff",
            borderColor: "#33e1ff",
            color: "white",
            fontFamily: "Mulish , sans-serif",
          }}
          onClick={() => {
            handleSunscribe();
          }}
        >
          Subscribe
        </button>
      </div> */}
      <iframe
        style={{ width: "100%", height: "300px", marginTop: "-20px" }}
        width="100%"
        height={"100%"}
        src="https://cdn.forms-content.sg-form.com/769f8acb-a8d4-11ed-9b7d-ce1828523876"
      />
    </div>
  );
}
