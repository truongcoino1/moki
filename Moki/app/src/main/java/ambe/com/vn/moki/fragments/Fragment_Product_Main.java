package ambe.com.vn.moki.fragments;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import ambe.com.vn.moki.R;
import ambe.com.vn.moki.activities.MainActivity;


public class Fragment_Product_Main extends Fragment {


    public Fragment_Product_Main() {

    }


    public static Fragment_Product_Main newInstance(String param1, String param2) {
        Fragment_Product_Main fragment = new Fragment_Product_Main();
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View v=inflater.inflate(R.layout.fragment__product__main, container, false);
        final ImageView img=getActivity().findViewById(R.id.img_changeview);

        getFragmentManager()
                .beginTransaction()
                .add(R.id.container, new ProductMainFragment())
                .commit();

        img.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (MainActivity.is_grid) {

                    img.setImageResource(R.drawable.icon_grid);
                    getParentFragment().getChildFragmentManager().beginTransaction().setCustomAnimations(R.animator.card_flip_left_in, R.animator.card_flip_left_out, R.animator.card_flip_right_in, R.animator.card_flip_right_out
                    ).replace(R.id.container, new ProductMainFragment()).commit();

                    MainActivity.is_grid = false;



                } else {

                    img.setImageResource(R.drawable.tutorial_change_viewmode);
                    getParentFragment().getChildFragmentManager().beginTransaction().setCustomAnimations( R.animator.card_flip_right_in, R.animator.card_flip_right_out,R.animator.card_flip_left_in, R.animator.card_flip_left_out
                    ).replace(R.id.container, new ProductMainFragment()).commit();

                    MainActivity.is_grid = true;

                }
            }
        });
        return v;
    }


    }





