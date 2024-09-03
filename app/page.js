import Nav from "@/components/Nav";
export default function Home() {
  return (
    <>
    <header className=" fixed top-0 left-0 w-full z-10 flex justify-between pt-6 px-8 ">
      <div className = " text-3.2xl lg:text-3.8xl text-white font-light">BogiBogi</div>
      <Nav/>
    </header>
    <div></div>
    </>
  );
}
