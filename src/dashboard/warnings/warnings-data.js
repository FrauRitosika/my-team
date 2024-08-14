import { teamTrainingInfo } from '../../team-data.js';

const warningList = {};

teamTrainingInfo.warningInfo?.forEach(warning => {
    warningList[warning.warningType] = warning.employees?.length ?? 0;
});

export { warningList };