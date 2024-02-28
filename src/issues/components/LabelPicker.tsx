import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { gitHubApi } from "../../api/githubApi";
import { Label } from "../interfaces/label";

const getLabels = async (): Promise<Label[]> => {
  const { data } = await gitHubApi.get<Label[]>("/labels");
  return data;
};

export const LabelPicker = () => {
  const labelsQuery = useQuery({ queryKey: ["labels"], queryFn: getLabels });

  return (
    <div>
      <span
        className="badge rounded-pill m-1 label-picker"
        style={{ border: `1px solid #ffccd3`, color: "#ffccd3" }}
      >
        Primary
      </span>
    </div>
  );
};
