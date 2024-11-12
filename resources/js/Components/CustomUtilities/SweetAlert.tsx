import Swal, { SweetAlertIcon } from 'sweetalert2';


function SweetAlert(alertText: string, alertType: SweetAlertIcon) {
    Swal.fire({
        icon: alertType,
        title: alertText,
        showConfirmButton: false,
        timer: 1500
      });
}

export default SweetAlert;