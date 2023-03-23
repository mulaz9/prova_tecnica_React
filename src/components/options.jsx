import { useEffect, useState } from "react";
import Option from "./option";

export default function Options(props) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(
        "https://hiring-test-dxxsnwdabq-oa.a.run.app/getRoles"
      );

      const newJson = await response.json();
      const data = newJson.data;

      setOptions(data);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      {options.map((option) => (
        <Option
          key={option}
          id={option}
          value={option}
          label={option}
          onChange={props.onChange}
        ></Option>
      ))}
    </div>
  );
}
