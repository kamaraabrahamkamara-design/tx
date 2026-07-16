
    function handleSubmit(event, action) {
        event.preventDefault();
        const timestamp = new Date().toLocaleString();
        
        if (action === 'add') {
            const id = document.getElementById('add_id').value;
            const name = document.getElementById('add_name').value;
            const grade = document.getElementById('add_grade').value;
            document.getElementById('add_output').innerText = `✅ Success: Added student ${name} (${grade}) with ID ${id}.`;
        } 
        else if (action === 'delete') {
            const id = document.getElementById('del_id').value;
            document.getElementById('delete_output').innerText = `🗑️ Success: Deleted student ID ${id} from the portal.`;
        } 
        else if (action === 'search') {
            const query = document.getElementById('search_query').value;
            document.getElementById('search_output').innerText = `ID        Name             Grade   Balance
------------------------------------------------
MOCK-01   ${query} Sample     Grade 9 $0.00`;
        } 
        else if (action === 'transact') {
            const id = document.getElementById('tx_id').value;
            const type = document.getElementById('tx_type').value;
            const amount = parseFloat(document.getElementById('tx_amount').value).toFixed(2);
            const desc = document.getElementById('tx_desc').value || (type === 'Charge Fee (+)' ? 'Tuition Fee' : 'Tuition Payment');
            
            if (type === 'Charge Fee (+)') {
                document.getElementById('tx_output').innerText = `✅ Charged $${amount} to Student ${id}.
Timestamp: ${timestamp}`;
            } else {
                let receipt = `============================================
`;
                receipt += `       PREVAILING WORD SCHOOL SYSTEM - TUITION RECEIPT       
`;
                receipt += `============================================
`;
                receipt += `Receipt Reference: REC-${id}-MOCK
`;
                receipt += `Student ID:        ${id}
`;
                receipt += `Description:       ${desc}
`;
                receipt += `Amount Paid:       $${amount}
`;
                receipt += `Transaction Time:  ${timestamp}
`;
                receipt += `Status: RECEIVED / SYSTEM COMPLETED
`;
                receipt += `============================================`;
                document.getElementById('tx_output').innerText = `✅ Payment recorded! (Simulated Receipt below):

${receipt}`;
            }
        }
    }
