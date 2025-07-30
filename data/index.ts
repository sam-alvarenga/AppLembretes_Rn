import { Lembrete } from "../types/lembrete";


type BD = {
    lembrete: Lembrete[]
};
export const data: BD = {
    lembrete: [
        {
           LembreteId: 1,
            TituloLembrete: 'Reunião',
            CorpoLembrete: 'Reunião com fulado as 14h ',
            StatusLembrete: true
        },
        {
            LembreteId: 2,
            TituloLembrete: 'Esudar',
            CorpoLembrete: 'Estudar Lógica de Programação e JavaScript ',
            StatusLembrete: true
        },
        {
            LembreteId: 3,
            TituloLembrete: 'Pagar',
            CorpoLembrete: 'Pagar conta de luz ref AGO25',
            StatusLembrete: false
        },
        {
            LembreteId: 4,
            TituloLembrete: 'Carro',
            CorpoLembrete: 'Levar carro para revisão',
            StatusLembrete: true
        },
        {
            LembreteId: 5,
            TituloLembrete: 'Pagar',
            CorpoLembrete: 'Pagar condomínio ref AGO25 ',
            StatusLembrete: false
        },
        {
            LembreteId: 6,
            TituloLembrete: 'Estudar',
            CorpoLembrete: 'Estudar RN 1h por dia ',
            StatusLembrete: true
        },
        {
            LembreteId: 7,
            TituloLembrete: 'Carro',
            CorpoLembrete: 'Abastecer o carro',
            StatusLembrete: false
        }
        
    ],
}
