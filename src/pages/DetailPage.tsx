import ImgDetail from "./DetailPage/ImgDetail";
import InfoDetail from "./DetailPage/InfoDetail";

type Props = {};

const DetailPage = (props: Props) => {
  return (
    <div className="container mx-auto my-20">
      <div className="px-14">
        <div className="text-sm flex gap-3">
          <span className="opacity-50">Account</span>
          <span>/</span>
          <span className="opacity-50">Nothing</span>
          <span>/</span>
          <span>Havic HV G-92 Gamepad</span>
        </div>
        <div className="flex gap-[70px] mt-20">
          <ImgDetail />
          <InfoDetail />
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-5xl font-bold">Other Products</h1>
      </div>
    </div>
  );
};

export default DetailPage;
