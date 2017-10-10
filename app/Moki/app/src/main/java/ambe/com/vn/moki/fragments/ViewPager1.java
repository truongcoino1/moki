package ambe.com.vn.moki.fragments;


import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import com.squareup.picasso.Picasso;

import ambe.com.vn.moki.R;

/**
 * Created by HoangNV on 10/10/2017.
 */

public class ViewPager1 extends Fragment {
    ImageView img;
    int position;
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {
        View v=inflater.inflate(R.layout.fragment_viewpager1,container,false);
        img=v.findViewById(R.id.img_fragment_viewpager1);
        return v;
    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);

        Bundle bundle = getArguments();
        if (bundle != null) {
            position = bundle.getInt("POSITION", -1);
        }
        switch (position)
        {
            case 0:

                    String str="http://diendanso.net/wp-content/uploads/2015/12/anh-dep-17.jpg";

                    Picasso.with(getActivity()).load(str)
                            .into(img);
                    img.setScaleType(ImageView.ScaleType.FIT_XY);
                    break;
            case 1:
                String str1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNwpPOkNoh7r3sc4X2KKpmZp07bCLZFIBU8WZyDhFNvlOyXjIYg";
                Picasso.with(getActivity()).load(str1)
                        .into(img);
                img.setScaleType(ImageView.ScaleType.FIT_XY);
                break;


    }



    }
}
