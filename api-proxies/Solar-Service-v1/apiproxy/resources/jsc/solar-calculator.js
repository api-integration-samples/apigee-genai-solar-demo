var solarObject = JSON.parse(context.proxyResponse.content);

var averageKwh = solarObject["solarPotential"]["solarPanelConfigs"][parseInt(solarObject["solarPotential"]["solarPanelConfigs"].length / 2)]["yearlyEnergyDcKwh"];
var averagePanelsCount = solarObject["solarPotential"]["solarPanelConfigs"][parseInt(solarObject["solarPotential"]["solarPanelConfigs"].length / 2)]["panelsCount"];

var averageMarketValuePerYear = (parseFloat(averageKwh) / 2 * .1) + (parseFloat(averageKwh) / 2 * .23);
var averageCostToInstallPanels = parseFloat(averagePanelsCount) * 400 * 1.8;

context.setVariable("apigee.averageKwh", averageKwh);
context.setVariable("apigee.averagePanelsCount", averagePanelsCount);
context.setVariable("apigee.averageMarketValuePerYear", averageMarketValuePerYear);
context.setVariable("apigee.averageCostToInstallPanels", averageCostToInstallPanels);
context.setVariable("apigee.averageBreakEvenPointInYears", parseInt(averageCostToInstallPanels / averageMarketValuePerYear));