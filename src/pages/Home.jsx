import { useEffect, useState } from "react";
import SummaryCard from "../components/SummaryCard";
import { getJobs } from "../api/todoApi";
import JobItem from "../components/JobItem";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return;
    getJobs(token).then((rs) => {
      console.log(rs.data);
      setJobs(rs.data);
    });
  }, []);

  return (
    <>
      <div className="flex justify-around gap-2 mt-3">
        <SummaryCard title="All Jobs" amount="20" />
        <SummaryCard title="Ongoing Jobs" amount="12" />
        <SummaryCard title="Jobs Done" amount="8" />
      </div>
      <div className="w-2/3 mx-auto mt-5">
        {jobs.length > 0 ? (
          jobs.map((el) => <JobItem key={el.id} job={el} />)
        ) : (
          <p className="text-center text-xl">No Job</p>
        )}
      </div>
    </>
  );
}
