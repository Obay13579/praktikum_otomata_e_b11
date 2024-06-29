$(document).ready(function() {
    $('#palindromeForm').on('submit', function(event) {
        event.preventDefault();
        const formData = $(this).serialize();

        $.post('/', formData, function(response) {
            const resultText = response.result ? "Yes, this word is a palindrome" : "No, this word isn't a palindrome";
            $('.toast-body').text(resultText);
            const toast = new bootstrap.Toast($('#palindromeToast'));
            toast.show();
        });
    });
});
