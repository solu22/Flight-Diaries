import diaries from "../../data/diaries";
import {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveDiaryEntry,
} from "../types";

const getEntries = (): Array<DiaryEntry> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return diaries;
};

const getNonSensitiveEntries = (): Array<NonSensitiveDiaryEntry> => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const addDiary = (
  entry: NewDiaryEntry
): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...entry
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

const addEntry = () => {
  return [];
};

const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  return entry;
};

export default {
  getEntries,
  addEntry,
  getNonSensitiveEntries,
  findById,
  addDiary,
};
