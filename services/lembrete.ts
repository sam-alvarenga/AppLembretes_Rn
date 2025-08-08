import { data } from "../data/index";

export function getAlllembretes() {
    return data.lembretes;
}

export function getLembreteById(pId: number) {
    return data.lembretes.find(item => item.LembreteId === pId);
}

