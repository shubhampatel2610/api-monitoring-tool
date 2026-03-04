/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import dashboardStore from "@/app/store/DashboardStore";
import AppConstants from "@/app/utils/AppConstants";
import { getBadgeSeverityByMethod } from "@/app/utils/helperFunctions";
import { observer } from "mobx-react";
import moment from "moment";
import { Badge } from "primereact/badge";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import DatatableExpansionTemplate from "./DatatableExpansionTemplate";

interface DatatableProps {
    tableData: any[];
}

const ApiDatatableComponent = observer((props: DatatableProps) => {
    const { tableData } = props;

    const DateColumnRenderer = (rowData: any) => {
        const formattedDate = moment(rowData?.lastChecked).format("DD/MM/YYYY, hh:mm A");
        return <span id={rowData._id}>{formattedDate}</span>;
    }

    const MethodColumnRendered = (rowData: any) => {
        const badgeSeverity = getBadgeSeverityByMethod(rowData?.method);
        return <Badge
            id={rowData._id}
            size={"large"}
            value={rowData?.method}
            severity={badgeSeverity}
        />;
    }

    const tableColumns = [
        {
            field: 'method',
            header: AppConstants.METHOD_HEADER,
            sortable: true,
            body: MethodColumnRendered
        },
        {
            field: 'name',
            header: AppConstants.NAME_HEADER,
            sortable: true
        },
        {
            field: 'url',
            header: AppConstants.URL_HEADER,
            sortable: true
        },
        {
            field: 'lastChecked',
            header: AppConstants.LAST_CHECKED_HEADER,
            sortable: true,
            body: DateColumnRenderer
        },
        {
            field: 'totalChecks',
            header: AppConstants.TOTAL_CHECKS_HEADER,
            sortable: true
        },
        {
            field: 'uptimePercentage',
            header: AppConstants.UPTIME_PERCENTAGE_HEADER,
            sortable: true
        },
        {
            field: 'averageResponseTime',
            header: AppConstants.AVJ_RESPONSE_TIME_HEADER,
            sortable: true
        },
    ];

    const rowExpansionTemplate = (rowData: any) => {
        return <DatatableExpansionTemplate
            rowData={rowData}
            DateColumnRenderer={DateColumnRenderer}
        />
    }

    const allowExpansion = (rowData: any) => {
        return rowData?.logs?.length > 0;
    };

    return (
        <>
            <DataTable
                dataKey={"_id"}
                size={"small"}
                value={tableData}
                tableStyle={{ minWidth: '50rem' }}
                showGridlines
                removableSort
                expandedRows={dashboardStore.expandedRows}
                onRowToggle={(e) => dashboardStore.setExpandedRows(e.data)}
                rowExpansionTemplate={rowExpansionTemplate}
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                totalRecords={tableData?.length}
                // paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                // currentPageReportTemplate="{first} to {last} of {totalRecords}"
            >
                {tableColumns.map((col) => (
                    <Column
                        key={col.field}
                        field={col.field}
                        header={col.header}
                        sortable={col.sortable}
                        body={col.body}
                    />
                ))}
                <Column expander={allowExpansion} style={{ width: '5rem' }} />
            </DataTable>
        </>
    )
});

export default ApiDatatableComponent;