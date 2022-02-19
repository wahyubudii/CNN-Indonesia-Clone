import Navitem from "./Navitem";

export default function Nav() {
  return (
    <>
      <Navitem title="Home" link="/" />
      <Navitem title="Nasional" link="/nasional" />
      <Navitem title="Internasional" link="/internasional" />
      <Navitem title="Ekonomi" link="/ekonomi" />
      <Navitem title="Olahraga" link="/olahraga" />
      <Navitem title="Teknologi" link="/teknologi" />
      <Navitem title="Hiburan" link="/hiburan" />
      <Navitem title="Gaya Hidup" link="/gaya-hidup" />
    </>
  );
}
