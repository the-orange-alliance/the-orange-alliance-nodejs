enum DataSource {
  Unknown = 0,
  DataSync = 1,
  EventArchive = 2,
  FIRST = 3,
  Unofficial = 4,
  Other = 5
}

const DataSourceMapping = {
  [DataSource.Unknown]: 0,
  [DataSource.DataSync]: 1,
  [DataSource.EventArchive]: 2,
  [DataSource.FIRST]: 3,
  [DataSource.Unofficial]: 4,
  [DataSource.Other]: 5
};

const numberToDataSource = (dataSource: number): DataSource => {
  return dataSource;
};

const dataSourceToNumber = (dataSource: DataSource): number => {
  return DataSourceMapping[dataSource];
};

export { DataSource, numberToDataSource, dataSourceToNumber };
