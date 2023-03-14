import Cookies from "js-cookie";

const cookieName = "RISHOMON_CAR_HISTORY";

function initializeCookie(): void {
  const cookie = Cookies.get(cookieName);
  if (!cookie) Cookies.set(cookieName, "[]");
}

function addCarSearch(
  car: CookieSearchHistory
): CookieSearchHistory[] | undefined {
  const history = getCurrentHistory();
  if (
    history.length > 0 &&
    history.some((someCar) => someCar.carNumber === car.carNumber)
  )
    return history;
  if (history.length === 5) history.shift();
  history.push(car);
  setCarHistory(history);
  return history;
}

function setCarHistory(history: CookieSearchHistory[]): void {
  Cookies.set(cookieName, JSON.stringify(history));
}

function getCurrentHistory(): CookieSearchHistory[] {
  const cookie = Cookies.get(cookieName)!;
  return JSON.parse(cookie);
}

function deleteHistory(): void {
  Cookies.set(cookieName, "[]");
}

export type CookieSearchHistory = {
  carNumber: string;
  carModel?: string | null;
  status: boolean; // represents if results were found
};
export { initializeCookie, addCarSearch, deleteHistory, getCurrentHistory };
