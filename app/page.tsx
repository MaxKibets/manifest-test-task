import Heading from "@/components/Heading";
import InstrumentsList from "@/components/InstrumentsList";
import Timer from "@/components/Timer";
import Packages from "@/components/Packages";
import TimerProvider from "@/components/TimerContext";
import Button from "@/components/Button";
import Terms from "@/components/Terms";
import PackageProvider from "@/components/PackageContext";
import { TEXT } from "@/constants";
import { getFlagValue } from "@/utils/flags";

export default async function Home() {
  const showTimer = await getFlagValue<boolean>("banner_with_timer", false);

  console.log(showTimer);

  return (
    <main>
      <section>
        <Heading>{TEXT.HEADING}</Heading>
        <InstrumentsList />
        <PackageProvider>
          <TimerProvider showTimer={showTimer}>
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
