/* eslint-disable @typescript-eslint/no-explicit-any */
import AppConstants from "@/app/utils/AppConstants";
import { getBadgeSeverityByStatus } from "@/app/utils/helperFunctions";
import { Badge } from "primereact/badge";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

interface TableProps {
    rowData: any,
    DateColumnRenderer: (rowData: any) => React.ReactNode
}

const DatatableExpansionTemplate = (props: TableProps) => {
    const { rowData, DateColumnRenderer } = props;

    const StatusCodeRenderer = (rowData: any) => {
        const badgeSeverity = getBadgeSeverityByStatus(rowData?.statusCode);
        return <Badge
            value={rowData?.statusCode}
            severity={badgeSeverity}
        />;
    }

    const expandedTableColumns = [
        {
            field: 'timestamp',
            header: AppConstants.TIME_STAMP_HEADER,
            sortable: true,
            body: DateColumnRenderer
        },
        {
            field: 'responseTime',
            header: AppConstants.RESPONSE_TIME_HEADER
        },
        {
            field: 'statusCode',
            header: AppConstants.STATUS_CODE_HEADER,
            sortable: true,
            body: StatusCodeRenderer
        },
        {
            field: 'success',
            header: AppConstants.STATUS_HEADER,
            sortable: true
        },
    ];

    return (
        <>
            <DataTable
                size={"small"}
                value={rowData?.logs}
                tableStyle={{ minWidth: '50rem' }}
            >
                {expandedTableColumns.map((col) => (
                    <Column
                        key={col.field}
                        field={col.field}
                        header={col.header}
                        sortable={col.sortable}
                        body={col.body}
                    />
                ))}
            </DataTable>
        </>
    )
}

export default DatatableExpansionTemplate;