import { ISerializable } from "../../ISerializable";
import MatchDetails from "../../MatchDetails";
import AllianceDetails2425 from "./AllianceDetails";

export default class MatchDetails2425 extends MatchDetails implements ISerializable {
    private _redDtls: AllianceDetails2425;
    private _blueDtls: AllianceDetails2425;

    constructor() {
        super();
        this._redDtls = new AllianceDetails2425();
        this._blueDtls = new AllianceDetails2425();
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

    fromJSON(json: any): MatchDetails2425 {
        this.matchDetailKey = json.match_detail_key;
        this.matchKey = json.match_key;
        this.redMinPen = json.red_min_pen;
        this.blueMinPen = json.blue_min_pen;
        this.redMajPen = json.red_maj_pen;
        this.blueMajPen = json.blue_maj_pen;
        this.redDtls = new AllianceDetails2425().fromJSON(json.red);
        this.blueDtls = new AllianceDetails2425().fromJSON(json.blue);
        return this;
    }

    get blueDtls(): AllianceDetails2425 {
        return this._blueDtls;
    }
    set blueDtls(value: AllianceDetails2425) {
        this._blueDtls = value;
    }

    get redDtls(): AllianceDetails2425 {
        return this._redDtls;
    }
    set redDtls(value: AllianceDetails2425) {
        this._redDtls = value;
    }
}
