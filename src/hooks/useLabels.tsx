import { useQuery } from "@tanstack/react-query";
import { gitHubApi } from "../api/githubApi";
import { Label } from "../issues/interfaces/label";

const getLabels = async (): Promise<Label[]> => {
  const { data } = await gitHubApi.get<Label[]>("/labels");
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
  });

  return labelsQuery;
};
