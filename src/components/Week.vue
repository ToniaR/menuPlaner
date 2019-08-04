<template>
    <div class="week menuPlan">
        <div class="day__date-block day__date-block--long">
            <p>Plan for
               <strong>11-11-2019</strong> from 
               <strong>18-11-2019</strong> 
            </p>
        </div>
        <table class="plan-table" border="1"> 
            <thead class="plan-table-header">
                <tr>
                    <th class="plan-day-col"></th>
                    <th class="plan-day-col">one</th>
                    <th class="plan-day-col">two</th>
                    <th class="plan-day-col">three</th>
                </tr>
            </thead>
            <tbody class="plan-table-body">
                <tr>
                    <th class="plan-day-col plan-table-row-title">
                        meal type
                    </th>
                    <td class="plan-day-col">
                        <div class="meal-block">
                            meal name with link
                        </div>
                    </td>
                    <td class="plan-day-col">
                        <div class="meal-block">
                            meal name with link
                        </div>
                    </td>
                    <td class="plan-day-col">
                        <div class="meal-block">
                            meal name with link
                        </div>
                    </td>
                </tr>
                <tr>
                    <th class="plan-day-col plan-table-row-title">
                        meal type
                    </th>
                    <td class="plan-day-col">
                        <div class="meal-block">
                            meal name with link
                        </div>
                    </td>
                    <td class="plan-day-col">
                        <div class="meal-block">
                            meal name with link
                        </div>
                    </td>
                    <td class="plan-day-col">
                        <div class="meal-block">
                            meal name with link
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'Week'
}
</script>
