<?php
/**
 * Created by PhpStorm.
 * User: alexandrzanko
 * Date: 2/12/18
 * Time: 8:32 AM
 */

// Add the Meta Box
function add_product_meta_box()
{
    add_meta_box(
        'product_meta_box', // $id
        __('Product settings', 'naturlith'), // $title
        'show_product_meta_box', // $callback
        'naturlith_products', // $page
        'normal', // $context
        'high'); // $priority
}

add_action('add_meta_boxes', 'add_product_meta_box');
// Field Array

$prefix = 'naturlith_product_';
$product_meta_fields = array(
    array(
        'label' => __('Mark', 'naturlith'),
        'desc' => __('Short mark for product.', 'naturlith'),
        'id' => $prefix . 'mark',
        'type' => 'text'
    ),
    array(
        'label' => __('Description', 'naturlith'),
        'desc' => __('Description product.', 'naturlith'),
        'id' => $prefix . 'description',
        'type' => 'textarea'
    ),
    array(
        'label' => __('Price $', 'naturlith'),
        'desc' => __('Price for the product.', 'naturlith'),
        'id' => $prefix . 'price',
        'type' => 'number'
    ),
    array(
        'label' => __('Show price', 'naturlith'),
        'desc' => __('Check if need to show price', 'naturlith'),
        'id' => $prefix . 'show_price',
        'type' => 'checkbox'
    )
);

// The Callback
function show_product_meta_box()
{
    global $product_meta_fields, $post;
// Use nonce for verification
    echo '<input type="hidden" name="custom_meta_box_nonce" value="' . wp_create_nonce(basename(__FILE__)) . '" />';

    // Begin the field table and loop
    echo '<table class="form-table">';
    foreach ($product_meta_fields as $field) {
        // get value of this field if it exists for this post
        $meta = get_post_meta($post->ID, $field['id'], true);
        // begin a table row with
        echo '<tr><th><label for="' . $field['id'] . '">' . $field['label'] . '</label></th><td>';
        switch ($field['type']) {
            // text
            case 'text':
                echo '<input type="text" name="' . $field['id'] . '" id="' . $field['id'] . '" value="' . $meta . '" size="30" /><br /><span class="description">' . $field['desc'] . '</span>';
                break;
            // number
            case 'number':
                echo '<input type="number" name="' . $field['id'] . '" id="' . $field['id'] . '" value="' . $meta . '" size="30" /><br /><span class="description">' . $field['desc'] . '</span>';
                break;
            // textarea
            case 'textarea':
                echo '<textarea name="' . $field['id'] . '" id="' . $field['id'] . '" cols="60" rows="4">' . $meta . '</textarea><br /><span class="description">' . $field['desc'] . '</span>';
                break;
            // checkbox
            case 'checkbox':
                echo '<input type="checkbox" name="' . $field['id'] . '" id="' . $field['id'] . '" ', $meta ? ' checked="checked"' : '', '/>
        <label for="' . $field['id'] . '">' . $field['desc'] . '</label>';
                break;
            // select
            case 'select':
                echo '<select name="' . $field['id'] . '" id="' . $field['id'] . '">';
                foreach ($field['options'] as $option) {
                    echo '<option', $meta == $option['value'] ? ' selected="selected"' : '', ' value="' . $option['value'] . '">' . $option['label'] . '</option>';
                }
                echo '</select><br /><span class="description">' . $field['desc'] . '</span>';
                break;
            default:
                break;

        } //end switch
        echo '</td></tr>';
    } // end foreach
    echo '</table>'; // end table
}

// Save the Data
function save_product_meta($post_id)
{
    global $product_meta_fields;

    // verify nonce
    if (isset($_POST['custom_meta_box_nonce']) && !wp_verify_nonce($_POST['custom_meta_box_nonce'], basename(__FILE__)))
        return $post_id;
    // check autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
        return $post_id;
    // check permissions
    if (isset($_POST['post_type']) && 'naturlith_products' == $_POST['post_type']) {
        if (!current_user_can('edit_page', $post_id))
            return $post_id;
    } elseif (!current_user_can('edit_post', $post_id)) {
        return $post_id;
    }

    // loop through fields and save the data
    foreach ($product_meta_fields as $field) {
        $old = get_post_meta($post_id, $field['id'], true);
        if (isset($_POST[$field['id']])) {
            $new = $_POST[$field['id']];
            if ($new && $new != $old) {
                update_post_meta($post_id, $field['id'], $new);
            } elseif ('' == $new && $old) {
                delete_post_meta($post_id, $field['id'], $old);
            }
        }

    } // end foreach
}

add_action('save_post', 'save_product_meta');
