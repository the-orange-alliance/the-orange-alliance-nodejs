import PowerPlayAllianceDetails from "./PowerPlayAllianceDetails";
import {ISerializable} from "../../ISerializable";
import MatchDetails from "../../MatchDetails";

export default class PowerPlayMatchDetails extends MatchDetails implements ISerializable {
  private _redDtls: PowerPlayAllianceDetails;
  private _blueDtls: PowerPlayAllianceDetails;

  constructor() {
    super();
    this._redDtls = new PowerPlayAllianceDetails();
    this._blueDtls = new PowerPlayAllianceDetails();
  }

  toJSON(): object {
    return {
      match_detail_key: this.matchDetailKey,
      match_key: this.matchKey,
      red_min_pen: this.redMinPen,
      blue_min_pen: this.blueMinPen,
      red_maj_pen: this.redMajPen,
      blue_maj_pen: this.blueMajPen,

      red: this.redDtls.toJSON(),
      blue: this.blueDtls.toJSON(),
    };
  }

  fromJSON(json: any): PowerPlayMatchDetails {
    this.matchDetailKey = json.match_detail_key;
    this.matchKey = json.match_key;
    this.redMinPen = json.red_min_pen;
    this.blueMinPen = json.blue_min_pen;
    this.redMajPen = json.red_maj_pen;
    this.blueMajPen = json.blue_maj_pen;

    this.redDtls = new PowerPlayAllianceDetails().fromJSON(json.red);
    this.blueDtls = new PowerPlayAllianceDetails().fromJSON(json.blue);
    return this;
  }

  get blueDtls(): PowerPlayAllianceDetails {
    return this._blueDtls;
  }

  set blueDtls(value: PowerPlayAllianceDetails) {
    this._blueDtls = value;
  }

  get redDtls(): PowerPlayAllianceDetails {
    return this._redDtls;
  }

  set redDtls(value: PowerPlayAllianceDetails) {
    this._redDtls = value;
  }
}
