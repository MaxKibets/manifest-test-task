import Heading from "@/components/Heading";
import InstrumentsList from "@/components/InstrumentsList";
import Timer from "@/components/Timer";
import Packages from "@/components/Packages";
import TimerProvider from "@/components/TimerContext";
import Button from "@/components/Button";
import Terms from "@/components/Terms";
import PackageProvider from "@/components/PackageContext";
import { TEXT } from "@/constants";

export default function Home() {
  return (
    <main>
      <section>
        <Heading>{TEXT.HEADING}</Heading>
        <InstrumentsList />
        <PackageProvider>
          <TimerProvider>
            <Timer mediaQuery={"(max-width: 1024px)"} />
            <Packages />
          </TimerProvider>
          <Button>{TEXT.BUTTON}</Button>
          <Terms />
        </PackageProvider>
      </section>
    </main>
  );
}
