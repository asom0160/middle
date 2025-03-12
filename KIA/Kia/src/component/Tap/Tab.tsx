import SubTab, { Status } from "./SudTap";

type TabProps = {
  selectWait: () => void;
  selectComplete: () => void;
  selected: Status;
};

const Tab = ({ selectWait, selectComplete, selected }: TabProps) => {
  return (
    <div style={{ display: "flex" }}>
      <SubTab
        click={selectWait}
        subtabText={"진행대기"}
        ea={4}
        isSelected={"완료" != selected}
      />
      <SubTab
        click={selectComplete}
        subtabText={"완료"}
        ea={2}
        isSelected={"완료" == selected}
      />
    </div>
  );
};

export default Tab;
