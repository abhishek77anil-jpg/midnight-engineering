import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import OpeningScene from "@/components/OpeningScene";
import SmoothScroll from "@/components/SmoothScroll";
import Journey from "@/components/Journey";
import Timeline from "@/components/Timeline";
import Innovations from "@/components/Innovations";
import Leadership from "@/components/Leadership";
import Connect from "@/components/Connect";
export default function Home() {
  return (
    <LoadingScreen>
      <SmoothScroll>
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
          <Navbar />

          <OpeningScene />

          <Journey />

          <Timeline />

          <Innovations />

          <Leadership />

          <Connect />

        </main>
      </SmoothScroll>
    </LoadingScreen>
  );
}