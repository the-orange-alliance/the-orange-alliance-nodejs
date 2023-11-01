import {ISerializable} from "../../ISerializable";
import MatchDetails from "../../MatchDetails";
import CenterstageAllianceDetails from "./AllianceDetails";

export default class CenterstageMatchDetails extends MatchDetails implements ISerializable {
  private _redDtls: CenterstageAllianceDetails;
  private _blueDtls: CenterstageAllianceDetails;

  constructor() {
    super();
    this._redDtls = new CenterstageAllianceDetails();
    this._blueDtls = new CenterstageAllianceDetails();
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

  fromJSON(json: any): CenterstageMatchDetails {
    this.matchDetailKey = json.match_detail_key;
    this.matchKey = json.match_key;
    this.redMinPen = json.red_min_pen;
    this.blueMinPen = json.blue_min_pen;
    this.redMajPen = json.red_maj_pen;
    this.blueMajPen = json.blue_maj_pen;

    this.redDtls = new CenterstageAllianceDetails().fromJSON(json.red);
    this.blueDtls = new CenterstageAllianceDetails().fromJSON(json.blue);
    return this;
  }

  get blueDtls(): CenterstageAllianceDetails {
    return this._blueDtls;
  }

  set blueDtls(value: CenterstageAllianceDetails) {
    this._blueDtls = value;
  }

  get redDtls(): CenterstageAllianceDetails {
    return this._redDtls;
  }

  set redDtls(value: CenterstageAllianceDetails) {
    this._redDtls = value;
  }
}
