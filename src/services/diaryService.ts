import diaries from '../../data/diaries';
import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';

const getEntries = (): Array<DiaryEntry> =>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return diaries;
};

const getNonSensitiveEntries = (): Array<NonSensitiveDiaryEntry> =>{
    return diaries.map(({ id, date, weather, visibility})=>({
        id, date, weather, visibility
    }));

};


const addEntry = ()=>{
    return [];
};

export default { getEntries, addEntry, getNonSensitiveEntries};
