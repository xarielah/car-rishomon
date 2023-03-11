import Title from "../../ui-elements/title/title";

const HeaderHero = () => {
  return (
    <div className="text-center flex flex-col gap-3 bg-yellow-500 p-4 full-bleed ">
      <Title>רשומון רכבים</Title>
      <p className="max-w-md mx-auto text-white">
        חיפוש נתונים במאגר ממשלתי באמצעות מספר רכב. ניתן למצוא תאריכי מבחנים,
        מידות גלגלים, מספרי שלדה ועוד...
      </p>
    </div>
  );
};

export default HeaderHero;
