import { FC } from "react";
import { useLabels } from "../../hooks/useLabels";
import Loading from "../../shared/components/Loading";

interface Props {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker: FC<Props> = ({ selectedLabels, onChange }) => {
  const labelsQuery = useLabels();

  if (labelsQuery.isLoading) {
    return <Loading />;
  }
  return (
    <>
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className={`badge rounded-pill m-1 label-picker ${
            selectedLabels.includes(label.name) ? "label-actve" : "null"
          } `}
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
          onChange={() => onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </>
  );
};
