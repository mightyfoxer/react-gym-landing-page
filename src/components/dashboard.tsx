interface DashboardProps {
  number: string;
  description: string;
}

const Dashboard: React.FC<DashboardProps> = ({
  number,
  description,
}: DashboardProps) => {
  return (
    <>
      <div className="flex flex-col p-4 items-center sm:items-start justify-center">
        <p className="text-xl sm:text-[40px] font-bold text-white">{number}</p>
        <p className="text-white text-base  whitespace-nowrap">{description}</p>
      </div>
    </>
  );
};

export default Dashboard;
