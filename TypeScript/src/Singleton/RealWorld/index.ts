class WeekDays {
  private static instance: WeekDays;

  private daysEs: string[] = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
  private daysEn: string[] = ['Monday','Tuesday','Wednesday','Thursday','Friday','Staturday','Sunday'];
  private lang = 'es'
  
  /**
   * @param lang the languaje for WeekDays
   */
  private constructor(lang: string) {
    this.lang = lang
  }

  public static getInstance(lang?: string): WeekDays {
    if (!WeekDays.instance) {
      WeekDays.instance = new WeekDays(lang);
    }

    return WeekDays.instance;
  }

  getDays(): string[] {
    return this.lang === 'en' ? this.daysEn : this.daysEs;
  }
  setLang(lang:string): void {
    this.lang = lang;
  }
}


const weekDays = WeekDays.getInstance('es');
const weekDays2 = WeekDays.getInstance();

console.log(weekDays.getDays());
console.log(weekDays2.getDays());
weekDays.setLang('en')



console.log(weekDays.getDays());
console.log(weekDays2.getDays());

