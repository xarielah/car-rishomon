import useSearch from "../../hooks/use-search";
import { greetingByHour } from "../../lib/utils/personal-greetings";

const HomeMessage = () => {
  const now = new Date();
  const currentGreeting = greetingByHour(now.getHours());
  const { toggleShowHistory } = useSearch();

  return (
    <section className="mx-auto flex items-center flex-col justify-center gap-6">
      <h1 className="font-bold text-3xl md:text-5xl">היי, {currentGreeting}</h1>
      <p className="text-center md:text-2xl md:max-w-2xl">
        כאן ניתן לבדוק מידע על רכבים בישראל. האתר שואב את הנתונים ממאגר ממשלתי
        שמתעדכן בתכיפות ובתדירות גבוהה.
        <br />
        <br /> על מנת לחפש מידע על רכב רצוי יש להזין בתיבת החיפוש מעלה את מספר
        הרכב ובלחיצה על זכוכית המגדלת, או כפתור האנטר במקלדת, החיפוש יתחיל.
        <br />
        <br />
        סידרנו לכם את האפשרות לחזור על חיפושים שביצעתם בעבר, ניתן לפתוח את רשימת
        היסטוריית החיפושים על ידי לחיצה על הכפתור{" "}
        <span
          onClick={toggleShowHistory}
          className="font-bold hover:text-blue-500 ease-in-out duration-300 cursor-pointer hover:underline"
        >
          "חיפושים אחרונים"
        </span>{" "}
        בראש האתר.
      </p>
    </section>
  );
};

export default HomeMessage;
