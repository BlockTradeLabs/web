import { FeatureNavItem } from "../../../../models/IFeatureNavItem";
import percentage1Img from "../../../../components/main/home/feature/assets/images/percentage-1.png";
import percentage2Img from "../../../../components/main/home/feature/assets/images/percentage-2.png";
import percentage3Img from "../../../../components/main/home/feature/assets/images/percentage-3.png";
import percentage4Img from "../../../../components/main/home/feature/assets/images/percentage-4.png";
import learning from "../../../../components/main/home/feature/assets/images/learning2.png";
import exchange from "../../../../components/main/home/feature/assets/images/exchange2.png";
import reputation from "../../../../components/main/home/feature/assets/images/reputation2.png";
import escrow from "../../../../components/main/home/feature/assets/images/escrow2.png";
import pool from "../../../../components/main/home/feature/assets/images/pool2.png";

export const navContent: FeatureNavItem[] = [
  { id: 1, loanValue: 10, percentageImg: percentage1Img, thumbImg: learning },
  { id: 2, loanValue: 18, percentageImg: percentage2Img, thumbImg: exchange },
  { id: 3, loanValue: 30, percentageImg: percentage3Img, thumbImg: reputation },
  { id: 4, loanValue: 28, percentageImg: percentage4Img, thumbImg: escrow },
  { id: 5, loanValue: 95, percentageImg: percentage4Img, thumbImg: pool },
];
