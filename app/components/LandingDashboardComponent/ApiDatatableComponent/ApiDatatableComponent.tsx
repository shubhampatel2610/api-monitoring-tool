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
import ButtonComponent from "@/app/common/ButtonComponent/ButtonComponent";

interface DatatableProps {
    tableData: any[];
}

const ApiDatatableComponent = observer((props: DatatableProps) => {
    const { tableData } = props;

    const DateColumnRenderer = (rowData: any) => {
        const formattedDate = rowData?.lastChecked ? moment(rowData?.lastChecked).format("DD/MM/YYYY, hh:mm A") : "-";
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

    const onExpandClick = (id: string, isExpanded: boolean) => {
        const newExpandedRows = { ...dashboardStore.expandedRows };

        if (isExpanded) {
            delete newExpandedRows[id];
        } else {
            newExpandedRows[id] = true;
        }

        dashboardStore.setExpandedRows(newExpandedRows);
    }

    const ActionColumnRenderer = (rowData: any) => {
        const isExpanded = dashboardStore.expandedRows?.[rowData?._id];

        return <div id={rowData._id} className={"flex gap-1"}>
            <ButtonComponent
                icon="pi pi-sync"
                rounded outlined
                severity={"success"}
            />
            <ButtonComponent
                icon="pi pi-pencil"
                rounded outlined
                severity={"help"}
            />
            <ButtonComponent
                icon="pi pi-trash"
                rounded outlined
                severity={"danger"}
            />
            {(rowData?.logs?.length > 0) &&
                <ButtonComponent
                    icon={`pi ${isExpanded ? "pi-angle-down" : "pi-angle-right"}`}
                    rounded outlined
                    onClick={() => onExpandClick(rowData._id, isExpanded)}
                    severity={"info"}
                />}
        </div>;
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
        {
            header: AppConstants.ACTIONS_HEADER,
            body: ActionColumnRenderer
        },
    ];

    const rowExpansionTemplate = (rowData: any) => {
        return <DatatableExpansionTemplate
            rowData={rowData}
            DateColumnRenderer={DateColumnRenderer}
        />
    }

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
            </DataTable>
        </>
    )
});

export default ApiDatatableComponent;