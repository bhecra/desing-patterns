interface License {
  calcFee(): void;
}


class Billing {

  private _license:  License

  /**
   *
   */
  constructor(license:License) {
    this._license = license;
  }
  
  
  
}

class PersonalLicense implements License {
  calcFee(): void {
    throw new Error("Method not implemented.");
  }
 
}

class BussinesLicense implements License {
  calcFee(): void {
    throw new Error("Method not implemented.");
  }
 
}
