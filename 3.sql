SELECT
    D.donor_id,
    D.branch_id,
    DATE_FORMAT(D.donation_date, '%Y-%m') AS donation_month,
    SUM(D.amount) AS total_donation
FROM
    Donation D
GROUP BY
    D.donor_id,
    D.branch_id,
    donation_month
ORDER BY
    D.donor_id,A
    D.branch_id,
    donation_month;
