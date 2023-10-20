<?php /* Template Name: Homepage */ ?>
<?php 
get_header();
$title = get_field('title',get_the_ID());
print_r($title);
?>


<?php get_footer() ?>